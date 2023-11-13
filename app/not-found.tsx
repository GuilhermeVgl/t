import Link from '@/components/Link';
import SectionContainer from '@/components/SectionContainer';

// TODO: Comment out when https://github.com/vercel/next.js/issues/50566 is fixed.

export default function FourZeroFour() {
  return (
    <SectionContainer>
      <div className="space-x-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14">
          404
        </h1>
      </div>
      <div className="max-w-md text-3xl">
        <p className="mb-4 font-bold leading-normal md:text-2xl">
          This page could not be found.
        </p>
        <br></br>
        <b className="font-normal text-2xl">Try to </b><a href="/" className="text-2xl underlineOpen font-semibold">Back to homepage</a>
      </div>
    </SectionContainer>
  );
}
