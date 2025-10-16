import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "./Select.tsx";

const COLOR_OPTIONS = ["red", "green", "blue"];

export default function ColorSelector() {
  const [tagColor, setTagColor] = useState<string>("");

  return (
    <Select value={tagColor} onValueChange={setTagColor}>

      {/* Pass the selected color to the trigger */}
      <SelectTrigger selectedColor={tagColor} />

      <SelectContent>
        {COLOR_OPTIONS.map((color) => (
          <SelectItem key={color} value={color}>
            <div
              className="w-5 h-5 rounded-sm border border-gray-300"
              style={{ backgroundColor: color }}/>
              
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
