import { Route, Routes } from 'react-router-dom';

import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';

export const AppRouter = () => {
    return (
        <Routes>
            
            {/* Login y registro */}
            <Route path="/auth/*" element={ <AuthRoutes /> } />
            
            {/* JournalApp */}
            <Route path="/*" element={ <JournalRoutes /> } />

        </Routes>
    )
}
// FONDO TOTAL: $28,700
// alquiler => $16,839
// wifi => $1,013

/// gastos secundarios:
// gymnasio => $ 3000
// spotify=> $ 600

