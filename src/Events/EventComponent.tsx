const EventComponent: React.FC = () => {
    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    };

    const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        console.log(event);
    };

    return (
        <div>
            <input onChange={onInputChange} />
            <div draggable onDragStart={onDragStart}>Drag Me!</div>
        </div>
    )
};

export default EventComponent;