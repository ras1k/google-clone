import moment from "moment/moment";

const Footer = () => {
    return (
        <div className="text-center p-10 mt-10 border-t dark:border-gray-700 border-gray-200 ">
            © {moment().format('YYYY')} Fake Goggle, Inc.
        </div>
    )
}

export default Footer