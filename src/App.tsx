import { Route, Routes } from 'react-router-dom';
import SiteLayout from './SiteLayout';
import HomePage from './HomePage';
import {
  AboutPage, AwardsPage, ContactPage, DonatePage, ElectronicMediaPage,
  FoundationPage, FounderPage, GalleryPage, GetInvolvedPage, ImpactPage,
  MissionPage, NotFoundPage, PrintMediaPage, ProjectsPage, VolunteerPage,
  WorkAreaPage,
} from './Pages';

export default function App() {
  return <Routes>
    <Route element={<SiteLayout />}>
      <Route index element={<HomePage/>}/>
      <Route path="about-us" element={<AboutPage/>}/>
      <Route path="about-us/about-the-foundation" element={<FoundationPage/>}/>
      <Route path="about-us/about-pragya-dixit" element={<FounderPage/>}/>
      <Route path="about-us/mission-vision-and-values" element={<MissionPage/>}/>
      <Route path="about-us/awards-and-accolades" element={<AwardsPage/>}/>
      <Route path="projects" element={<ProjectsPage/>}/>
      <Route path="projects/impact" element={<ImpactPage/>}/>
      <Route path="projects/work-area" element={<WorkAreaPage/>}/>
      <Route path="in-the-news-print-media" element={<PrintMediaPage/>}/>
      <Route path="in-the-news-print-media/in-the-news" element={<ElectronicMediaPage/>}/>
      <Route path="photo-gallery" element={<GalleryPage/>}/>
      <Route path="get-involved" element={<GetInvolvedPage/>}/>
      <Route path="get-involved/become-a-volunteer" element={<VolunteerPage/>}/>
      <Route path="get-involved/donate" element={<DonatePage/>}/>
      <Route path="contact-us" element={<ContactPage/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Route>
  </Routes>;
}
