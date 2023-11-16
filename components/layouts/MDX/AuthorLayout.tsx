import Image from '@/components/Image';
import type { Authors } from 'contentlayer/generated';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  content: Omit<Authors, '_id' | '_raw' | 'body'>;
}

export default function AuthorLayout({ children, content }: Props) {
  const { avatar, occupation, company } = content;

  return (
    <div className="pt-8">
      <div className="mb-8 flex flex-col-reverse items-center justify-between sm:flex-row sm:items-center">
        <div className="text-center sm:text-left">
          <h1 className="text-xl font-bold md:text-3xl lg:text-4xl">Guilherme Vieira</h1>
          <h2 className="text-sm font-normal md:text-base">
            <b className="font-semibold">{occupation}</b> at {' '}
            <a className="underlineOpen font-semibold" href="https://www.castgroup.com.br/">
              {company}
            </a>
          </h2>
        </div>
      </div>
  <div className="flex items-center text-xl">
    <div>
      <p>
        I am currently a{' '}
        <b className="font-semibold">Software Developer</b> at{' '}
        <a href="https://www.castgroup.com.br/" className="underlineOpen font-semibold"><b>Cast Group</b></a>,
        And a Computer Science student who enjoy problem-solving, 
        refining algorithms, and <b className="font-semibold">building software</b>. In my current role, 
        I have had the opportunity to reshape project architectures and upgrade library versions, 
        among other responsibilities. Additionally, I've developed projects supporting  <b className="font-semibold">over 50,000 users</b>.
        I specialize in crafting robust solutions using a versatile stack, including <b className="font-semibold">Java </b> and 
        <b className="font-semibold"> Spring Boot</b> for backend development, 
        <b className="font-semibold"> PHP</b> and <b className="font-semibold">Laravel</b> for dynamic web applications, and a front-end blend of 
        <b className="font-semibold"> TailwindCSS, Bootstrap, AngularJS, Javascript And TypeScript</b>.
      </p>
    </div>
    <img
      alt="Guilherme"
      height={210}
      width={250}
      src={'/static/images/avatar.png' || ''}
      className="rounded-t-lg object-scale-down"
    />
  </div>
      <div className="prose max-w-none pb-8 text-justify text-sm dark:prose-dark md:text-lg xl:col-span-2">
        {children}
      </div>
    </div>
  );
}
