import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

// HashRouter (URLs like /#/catalogue) instead of BrowserRouter: this is the
// robust choice for a static host like GitHub Pages, which has no server-side
// rewrite rule to send deep links (e.g. /catalogue) back to index.html. With
// HashRouter every route is really just "/", so refreshing or sharing a link
// to any page always works, regardless of the sub-path the site is served from.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
