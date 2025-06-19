import { useEffect, useState } from "react";

const useBoughtTogether = (id) => {
    const [FBTogether, setFBTogether] = useState([]);
    const [prices, setPrices] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://www.udemy.com/api-2.0/discovery-units/?context=clp-bundle&from=0&page_size=3&item_count=12&course_id=${id}&source_page=course_landing_page&locale=en_US&currency=inr&navigation_locale=en_US&funnel_context=landing-page`);
            const data = await res.json();
            const items = data?.units?.[0]?.items || [];

            setFBTogether(items);

            if (items.length > 0) {
                const ids = items.map(item => item.id).join(",");
                const priceRes = await fetch(`https://www.udemy.com/api-2.0/pricing/?course_ids=${ids}&fields[pricing_result]=price,discount_price,list_price,price_detail,price_serve_tracking_id`);
                const priceData = await priceRes.json();
                setPrices(priceData?.courses || {});
            }
        };

        fetchData();
    }, [id]);

    return { FBTogether, prices };
};

export default useBoughtTogether;