import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const DraggableSelectionsList = ({selection, setSelectedIds}) => {

    const [listItems, setListItems] = useState(selection);

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    const onDragEnd = (result) => {

        if (!result.destination) {
            return;
        }

        const items = reorder(
            listItems,
            result.source.index,
            result.destination.index
        );
        setListItems(items);
        setSelectedIds(items.map(item => item.id))
    };

    const getItemStyle = (isDragging, draggableStyle) => ({
        userSelect: "none",
        padding: '24px',
        margin: '0 0 1px 0',
        background: isDragging ? "rgba(224, 224, 224, 1)" : "white",
        ...draggableStyle,
    });

    const getListStyle = () => ({
        background: "rgba(224, 224, 224, 1)",
        padding: 1,
        width: 570,
    });

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                    <div {...provided.droppableProps} ref={provided.innerRef} style={getListStyle()}>
                        {listItems.map((item, index) => (
                            <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                            >
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={getItemStyle(
                                            snapshot.isDragging,
                                            provided.draggableProps.style
                                        )}
                                    >
                                        {item.first_name} {item.last_name} ({item.department}/{item.job_title})
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default DraggableSelectionsList;