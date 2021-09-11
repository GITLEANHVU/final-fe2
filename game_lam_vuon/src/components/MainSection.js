import Plot from './Plot';

function MainSection({ bag, removeLastItemFromBag, harvestAndSellPlant, showMessageBox }) {
    return (
        <div className="main-section">
            <div className="garden">
                <div className="garden-plots">
                    <Plot position={0} bag={bag} removeLastItemFromBag={removeLastItemFromBag} harvestAndSellPlant={harvestAndSellPlant} showMessageBox={showMessageBox}></Plot>
                    <Plot position={1} bag={bag} removeLastItemFromBag={removeLastItemFromBag} harvestAndSellPlant={harvestAndSellPlant} showMessageBox={showMessageBox}></Plot>
                    <Plot position={2} bag={bag} removeLastItemFromBag={removeLastItemFromBag} harvestAndSellPlant={harvestAndSellPlant} showMessageBox={showMessageBox}></Plot>
                    <Plot position={3} bag={bag} removeLastItemFromBag={removeLastItemFromBag} harvestAndSellPlant={harvestAndSellPlant} showMessageBox={showMessageBox}></Plot>
                    <Plot position={4} bag={bag} removeLastItemFromBag={removeLastItemFromBag} harvestAndSellPlant={harvestAndSellPlant} showMessageBox={showMessageBox}></Plot>
                    <Plot position={5} bag={bag} removeLastItemFromBag={removeLastItemFromBag} harvestAndSellPlant={harvestAndSellPlant} showMessageBox={showMessageBox}></Plot>
                </div>
            </div>
        </div>
    );
}

export default MainSection;