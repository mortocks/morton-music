import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { getPieces, Piece } from '../../hooks/usePiecesQuery';

type Props = {
  piece: Piece
}


const Home: NextPage<Props> = ({ piece }) => {
  return (
    <div className="container py-10">
        {JSON.stringify(piece)}
    </div>
  )
}

export async function getStaticPaths() {
  const { data } = await getPieces();
  const pieces: Piece[] = data.pieces.nodes
  const paths = pieces.map(p => ({ params: { slug: p.slug }}))
  return {
    fallback: true,
    paths
  }
}



export const getStaticProps: GetStaticProps= async ({ params }) => {
  const { data } = await getPieces();
  const { slug } = params;
  const pieces:Piece[] = data.pieces.nodes
  const piece = pieces.find(p  => p.slug === slug)
  return {
    props: {
      piece,
    },
 };
}

export default Home
