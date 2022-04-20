import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

const useQuestionsList = (videoID) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(true);
    const [questions, setQuestions] = useState([]);


    useEffect(() => {
        const fetchQuestions = async () => {
            const db = getDatabase();
            const quizRef = ref(db, "quiz/" + videoID + "/questions");
            //"quiz/" + videoID + "/questions"
            const quizQuery = query(
                quizRef,
                orderByKey(),

            )

            try {
                setError(false);
                setLoading(true);
                const snapshot = await get(quizQuery);
                setLoading(false);
                console.log(snapshot);

                if (snapshot.exists()) {
                    setQuestions((prevQuestions) => {
                        return [...prevQuestions, ...Object.values(snapshot.val())]
                    })
                }




            } catch (error) {
                console.log(error);
                setLoading(false);
                setError(true);
            }

        }

        fetchQuestions();


    }, [videoID]);

    return {
        loading,
        error,
        questions,

    }

}

export default useQuestionsList