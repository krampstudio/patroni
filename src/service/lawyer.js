import lawyerProvider from '../provider/lawyers.js';

export default function lawyerService() {

    return {
        getAll(){
            return lawyerProvider.getAll();
        }
    };
}
