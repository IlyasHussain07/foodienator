export function functionHandler(setIsCurrentState, isState, setIsSouth, setIsRice, setIsCurry, setIsParatha, setIsDessert, setIsState) {
    const handleSouth = () => {
        setIsCurrentState(isState.filter(item => item.category === "south"));
        setIsSouth(false);
        setIsRice(false);
        setIsCurry(false);
        setIsParatha(false);
        setIsDessert(false);
    };

    const handleRice = () => {
        setIsCurrentState(isState.filter(item => item.category === "rice"));
        setIsSouth(true);
        setIsRice(true);
        setIsCurry(false);
        setIsParatha(false);
        setIsDessert(false);
    };

    const handleCurry = () => {
        setIsCurrentState(isState.filter(item => item.category === "curry"));
        setIsSouth(true);
        setIsRice(false);
        setIsCurry(true);
        setIsParatha(false);
        setIsDessert(false);
    };

    const handleParatha = () => {
        setIsCurrentState(isState.filter(item => item.category === "paratha"));
        setIsSouth(true);
        setIsRice(false);
        setIsCurry(false);
        setIsParatha(true);
        setIsDessert(false);
    };

    const handleDessert = () => {
        setIsCurrentState(isState.filter(item => item.category === "dessert"));
        setIsSouth(true);
        setIsRice(false);
        setIsCurry(false);
        setIsParatha(false);
        setIsDessert(true);
    };

    const handleLowToHighPrice = () => {
        setIsState(isState.sort((a, b) => {
            return a.price - b.price;
        }));
        setIsCurrentState(isState.filter((item) => item.category === "south"));
    };
    const handleHighToLowPrice = () => {
        setIsState(isState.sort((a, b) => {
            if (a.price > b.price)
                return -1;
            if (a.price < b.price)
                return 1;
            return 0;
        }));
        setIsCurrentState(isState.filter((item) => item.category === "south"));
    };
    const handleLowToHighRating = () => {
        setIsState(isState.sort((a, b) => {
            return a.rating - b.rating;
        }));
        setIsCurrentState(isState.filter((item) => item.category === "south"));
    };
    const handleHighToLowRating = () => {
        setIsState(isState.sort((a, b) => {
            if (a.rating > b.rating)
                return -1;
            if (a.rating < b.rating)
                return 1;
            return 0;
        }));
        setIsCurrentState(isState.filter((item) => item.category === "south"));
    };
    return { handleHighToLowPrice, handleLowToHighPrice, handleHighToLowRating, handleLowToHighRating, handleSouth, handleRice, handleCurry, handleParatha, handleDessert };
}
