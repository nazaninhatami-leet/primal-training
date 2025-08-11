import Img from '../home-page/img';

const Reconnect = () => {
  return (
    <div className="w-full relative">
      <Img
        img={
          'https://appeal-rice-stuff.figma.site/_assets/v10/791bae17ad08baae9fda5aa37defc5633c7d757e.png?w=1536'
        }
        alt={'trainer 2'}
      />
      <h1 className="font-bold tracking-tight leading-[2.6rem] p-5 text-amber-50 text-[2.85rem] w-[45%] absolute bottom-0 left-0">
        WE'VE CREATED A SPACE WHERE YOU CAN RECONNECT WITH YOUR PRIMAL SELF.{' '}
      </h1>
    </div>
  );
};
export default Reconnect;
