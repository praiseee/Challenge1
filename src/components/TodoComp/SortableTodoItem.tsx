import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import TodoItem from "./TodoItem.tsx";

const SortableTodoItem = (props: any) => {
  const { id } = props;
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} className="flex items-center">
        
    {/* Drag handle */}
    <div
        {...listeners}
        {...attributes}
        className="cursor-grab mr-2 p-1"
        title="Drag to reorder">

        <div className="w-3 h-0.25 bg-gray-400 mb-1 rounded-sm"></div>
        <div className="w-3 h-0.25 bg-gray-400 mb-1 rounded-sm"></div>
        <div className="w-3 h-0.25 bg-gray-400 mb-1 rounded-sm"></div>
    </div>

      <TodoItem {...props} />
    </div>
  );
};

export default SortableTodoItem;
