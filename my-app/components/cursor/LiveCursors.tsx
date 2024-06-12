import { COLORS } from "@/constants";
import { LiveCursorProps } from "@/types/type";
import React from "react";
import Cursor from "./Cursor";

const LiveCursors = ({ others }: LiveCursorProps) => {
  return (
    <>
      {others.map(({ connectionId, presence }) => {
        if (!presence) return null;

        return (
          <Cursor
            key={connectionId}
            color={COLORS[connectionId % COLORS.length]}
            x={presence.cursor.x}
            y={presence.cursor.y}
            message={presence.message}
          />
        );
      })}
    </>
  );
};

export default LiveCursors;
