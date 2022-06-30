import type { NextPage } from 'next'
import Head from 'next/head'
import { getPieces, Piece } from '../hooks/usePiecesQuery';
import Link from 'next/link';
type Props = {
  pieces: Piece[]
}

const Home: NextPage<Props> = ({ pieces }) => {

  const links = pieces.map(p =>
    <div key={p.slug}> 
      <Link href={`/catalogue/${p.slug}`} >
        <a>
          {p.title}
        </a>
      </Link>
    </div>
    );

  return (
    <div className="container py-10">
      {links}
    </div>
  )
}


export async function getStaticProps() {
  const { data } = await getPieces();
  return {
    props: {
      pieces: data.pieces.nodes
    },
 };
}

export default Home
