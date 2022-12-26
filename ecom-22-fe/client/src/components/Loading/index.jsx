import Spinner from '~/components/Spinner';
function Loading() {
    return (
        <div className="h-screen bg-[#CB1C22]">
            <Spinner size={60} />
        </div>
    );
}

export default Loading;
