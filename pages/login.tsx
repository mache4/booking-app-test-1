import type { NextPage } from 'next';
import Layout from '../components/layout';

interface Props {

}

const Login: NextPage<Props> = (props) => {
    return (
        <Layout>
            <div className="login">
                Login
            </div>
        </Layout>
    );
}

export default Login;