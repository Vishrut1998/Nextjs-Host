import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

export default function RemoteApp() {
  const router = useRouter();
  const { app } = router.query;

  if (app === 'app1') {
    const App1 = dynamic(() => import('remote/App'), { ssr: false }); // Dynamically load app1
    return <App1 />;
  }

  return <div>404 - Not Found</div>;
}
