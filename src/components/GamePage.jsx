import React from 'react';

import { Progress } from './Progress.jsx';
import { Modal } from './Modal.jsx';
import { Grid } from './Grid.jsx';

const useGame = (images) => {
    const [finishedItems, setFinishedItems] = React.useState([]);
    const [stepsCount, setStepsCount] = React.useState(0);

    const checkItems = (firstItem, secondItem) => {
        const firstImage = images.find(({id}) => id === firstItem);
        const secondImage = images.find(({id}) => id === secondItem);
        if (firstImage.url === secondImage.url) {
            setFinishedItems((items) => [...items, firstItem, secondItem]);
        }
        setStepsCount((i) => i + 1);
    };

    const isWin = finishedItems.length > 0 && finishedItems.length === images.length;

    return {
        finishedItems,
        stepsCount,
        checkItems,
        isWin
    };
};

export function GamePage({images = [], onShowResults, gameType}) {
    const {
        finishedItems,
        stepsCount,
        checkItems,
        isWin
    } = useGame(images);

    const handleResultsClick = () => {
        onShowResults(stepsCount);
    };

    return (
        <section className="game container">
            <Progress value={finishedItems.length / 2} max={images.length / 2} />
            <div className="steps">Шаг {stepsCount}</div>
            <Grid
                images={images}
                gameType={gameType}
                finishedItems={finishedItems}
                checkItems={checkItems}
            />
            {isWin && (
                <Modal>
                    <h3 className="modal-caption">Победа!</h3>
                    <p className="modal-description">Теперь давайте узнаем результаты этой партии</p>
                    <button className="button modal-button" type="button" onClick={handleResultsClick}>Показать результаты</button>
                </Modal>
            )}
        </section>
    );
}