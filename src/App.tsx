import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import News from './pages/News';
import Resources from './pages/Resources';
import Documents from './pages/Documents';
import SideEvents from './pages/SideEvents';
import NotFound from './pages/NotFound';
import ImageGenerator from './pages/ImageGenerator';
import SBSTTA27 from './pages/SBSTTA27';
import SB8J1 from './pages/SB8J1';
import SB8J1About from './pages/SB8J1About';
import SB8J1Statements from './pages/SB8J1Statements';
import SB8J1Documents from './pages/SB8J1Documents';
import SB8J1News from './pages/SB8J1News';
import SB8J1MediaCoverage from './pages/SB8J1MediaCoverage';
import SB8J1SocialToolkit from './pages/SB8J1SocialToolkit';
import SB8J1PressConferences from './pages/SB8J1PressConferences';
import SB8J1Articles from './pages/SB8J1Articles';
import SB8J1Videos from './pages/SB8J1Videos';
import SB8J1SideEvents from './pages/SB8J1SideEvents';
import SB8J1Gallery from './pages/SB8J1Gallery';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/side-events" element={<SideEvents />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/image-generator" element={<ImageGenerator />} />
        <Route path="/sbstta-27" element={<SBSTTA27 />} />
        <Route path="/sb8j-1" element={<SB8J1 />} />
        <Route path="/sb8j-1/about" element={<SB8J1About />} />
        <Route path="/sb8j-1/statements" element={<SB8J1Statements />} />
        <Route path="/sb8j-1/documents" element={<SB8J1Documents />} />
        <Route path="/sb8j-1/news" element={<SB8J1News />} />
        <Route path="/sb8j-1/media-coverage" element={<SB8J1MediaCoverage />} />
        <Route path="/sb8j-1/social-toolkit" element={<SB8J1SocialToolkit />} />
        <Route path="/sb8j-1/press-conferences" element={<SB8J1PressConferences />} />
        <Route path="/sb8j-1/articles" element={<SB8J1Articles />} />
        <Route path="/sb8j-1/videos" element={<SB8J1Videos />} />
        <Route path="/sb8j-1/side-events" element={<SB8J1SideEvents />} />
        <Route path="/sb8j-1/gallery" element={<SB8J1Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
