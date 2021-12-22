import { Link } from "react-router-dom"
const AboutPage = () => {
    return (
        <footer>
            <h2 className='text-center'>This is our About us page</h2>
            <Link to="/" className='text-danger'>Back</Link>
        </footer>
    )
}

export default AboutPage
