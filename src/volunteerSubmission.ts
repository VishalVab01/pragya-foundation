import type { FormEvent } from 'react';

export type SubmissionState = 'idle' | 'submitting' | 'success' | 'error';

/** Sends volunteer details to the foundation's Google Apps Script web app. */
export async function submitVolunteerForm(
  event: FormEvent<HTMLFormElement>,
  setState: (state: SubmissionState) => void,
) {
  event.preventDefault();
  const form = event.currentTarget;
  const endpoint = import.meta.env.VITE_GOOGLE_SHEETS_WEB_APP_URL;

  if (!endpoint) {
    setState('error');
    return;
  }

  setState('submitting');
  const payload = Object.fromEntries(new FormData(form).entries());
  const token = crypto.randomUUID();
  const frameName = `sheets-submit-${token}`;
  const frame = document.createElement('iframe');
  frame.name = frameName;
  frame.title = 'Volunteer enquiry submission';
  frame.hidden = true;
  frame.setAttribute('sandbox', 'allow-scripts allow-forms allow-same-origin');
  document.body.append(frame);

  const outbound = document.createElement('form');
  outbound.method = 'POST';
  outbound.action = endpoint;
  outbound.target = frameName;
  outbound.hidden = true;
  const field = document.createElement('input');
  field.name = 'payload';
  field.value = JSON.stringify({ ...payload, submittedAt: new Date().toISOString(), token });
  outbound.append(field);
  document.body.append(outbound);

  const cleanup = () => {
    window.removeEventListener('message', onMessage);
    window.clearTimeout(timeout);
    outbound.remove();
    frame.remove();
  };
  const onMessage = (message: MessageEvent) => {
    if (message.data?.token !== token || typeof message.data?.ok !== 'boolean') return;
    cleanup();
    if (message.data.ok) {
      form.reset();
      setState('success');
    } else setState('error');
  };
  const timeout = window.setTimeout(() => {
    cleanup();
    setState('error');
  }, 20_000);
  window.addEventListener('message', onMessage);
  outbound.submit();
}
