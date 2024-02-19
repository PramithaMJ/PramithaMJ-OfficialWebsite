import Lottie from "lottie-react";
import programmingData from '../assets/lottie/programming.json';

const ProgrammingAnimation = () => {
    // Lottie options
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: programmingData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div>
            <h1>Programming Animation</h1>
            <Lottie options={defaultOptions} height={400} width={400} />
        </div>
    );
};

export default ProgrammingAnimation;
