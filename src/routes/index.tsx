import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hub from '../pages/Hub';
import BulkWhatsapp from '../pages/bulkWhatsapp';

const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Hub />} />
            <Route path='BulkWhatsapp' element={<BulkWhatsapp />} />
        </Routes>
    </Router>
);

export default AppRoutes;
