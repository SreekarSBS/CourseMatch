import { useEffect, useState } from "react";

const useCourseInfo3 = (id) => {
  const [courseData,setCourseData] = useState([]);

  useEffect(() => {
    fetchData()
  },[])

  const fetchData = async() => {
    const data = await fetch("https://www.udemy.com/api-2.0/course-landing-components/" + id + "/me/?couponCode=KEEPLEARNING&components=add_to_cart,available_coupons,base_purchase_section,buy_button,buy_for_team,cacheable_buy_button,cacheable_deal_badge,cacheable_discount_expiration,cacheable_price_text,cacheable_purchase_text,curated_for_ufb_notice_context,curriculum_context,deal_badge,discount_expiration,gift_this_course,incentives,instructor_links,lifetime_access_context,money_back_guarantee,price_text,purchase_tabs_context,purchase,recommendation,redeem_coupon,sidebar_container,purchase_body_container,one_click_checkout")
    const jsonData= await data.json()
    setCourseData(jsonData)
    console.log("Course Info:", jsonData);
  }
  return courseData

}  

export default useCourseInfo3;