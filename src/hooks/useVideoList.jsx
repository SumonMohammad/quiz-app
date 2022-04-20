import { get, getDatabase, limitToFirst, orderByKey, query, ref, startAt } from "firebase/database";
import { useEffect, useState } from "react";

const useVideoList = (page) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(true);
    const [videos, setVideos] = useState([]);
    const [hasMore, setHasMore] = useState(true)

    useEffect(() => {
        const fetchVideos = async () => {
            const db = getDatabase();
            const videosRef = ref(db, "videos");
            const videoQuery = query(
                videosRef,
                orderByKey(),
                startAt("" + page),
                limitToFirst(8)
            )

            try {
                setError(false);
                setLoading(true);
                const snapshot = await get(videoQuery);
                setLoading(false);

                if (snapshot.exists()) {
                    setVideos((prevVideos) => {
                        return [...prevVideos, ...Object.values(snapshot.val())]
                    })
                } else {
                    setHasMore(false)

                }




            } catch (error) {
                console.log(error);
                setLoading(false);
                setError(true);
            }

        }

        fetchVideos()


    }, [page]);

    return {
        loading,
        error,
        videos,
        hasMore
    }

}

export default useVideoList