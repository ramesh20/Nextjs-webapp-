import { useEffect } from "react";
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
	useEffect(()=>{
        import("@popperjs/core");
        import("bootstrap/dist/js/bootstrap");
	},[])

  return (
	<>
		<div id="wrapper">
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</div>
	</>
  )
}

export default MyApp
