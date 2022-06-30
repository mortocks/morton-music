import React, { useState } from "react";
import Waveform from "./Player";
import { useGetPieces } from "../../hooks/usePiecesQuery";

type Composer = {
  name: string;
  description?: string;
};

type Piece = {
  id: string;
  title: string;
  content: string;
  pieceFields: {
    itunes: string;
  };
  composers: {
    nodes: Composer[];
  };
};

const AudioPreviewer = () => {
  const [pieceIndex, setPieceIndex] = useState(0);

  const { data } = useGetPieces();

  const pieces = data?.pieces.nodes || [];

  const parsedPieces = pieces
    .map((p) => {
      const regex = /https?:\/\/\S+(m4a|mp3|mp4)/i;
      const matches = p.content?.match(regex) || [];
      return {
        ...p,
        audio: matches,
      };
    })
    .filter((p) => p.audio.length > 0);

  const piece = parsedPieces[pieceIndex];
  console.log(pieces);

  const next = () => {
    setPieceIndex((pieceIndex + 1) % parsedPieces.length);
  };

  return (
    <div className="bg-white shadow-xl p-3 rounded-xl">
      <div className="container mx-auto flex items-center m-2 p-2">
        {/* <img src="https://unsplash.it/80/80" c
lassName="rounded-lg shadow-xl w-24 mr-8 transform transition duration-300 hover:scale-110" /> */}{" "}
        <div>
          Player {pieceIndex}
          <h4>{piece?.title}</h4>
          <h6>{piece?.composers.nodes[0]?.name}</h6>
          <button onClick={next}>Next</button>
          {piece?.audio[0] && <Waveform url={piece.audio[0]} />}
        </div>
      </div>
    </div>
  );
};

export default AudioPreviewer;
