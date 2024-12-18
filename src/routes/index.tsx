import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hub from '../pages/Hub';
import BulkWhatsapp from '../pages/bulkWhatsapp';
import GeradorMensagens from '../pages/geradorMensagens';

const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Hub />} />
            <Route path="/bulkWhatsapp" element={<BulkWhatsapp />} />
            <Route path="/geradorMensagens" element={<GeradorMensagens />} />
        </Routes>
    </Router>
);

export default AppRoutes;
