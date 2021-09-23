import type { NextPage } from 'next';
import Layout from '../components/layout';

interface Props {

}

const Signup: NextPage<Props> = (props) => {
    return (
        <Layout>
            <div className="signup">
                Signup
            </div>
        </Layout>
    );
}

export default Signup;