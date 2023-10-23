function Promo() {
    return (
        <div className="promo-section">
            <div>
                <h1>Don't miss this deal!</h1>
            </div>
            <div>
                <h2>Subscribe to my newsletter and get all the shop items at 50% off!</h2>
            </div>

        </div>
    )
}

const data = {
    heading: "99% off all items!!"
    callToAction: "Everything must go"
}
function Promo() {
    return (
        <div>
            <PromoHeading heading={data.heading}
                callToAction={data.callToAction} />
        </div>
    )
}
export default Promo;