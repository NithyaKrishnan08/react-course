import { Header } from '../components/Header'; 
import './NotFoundPage.css';

export function NotFoundPage() {
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/home-favicon.png" />
      <title>Not Found</title>

      <Header />

      <div className="page-not-found">
        404 - Page Not Found!!
      </div>
    </>
  );
}