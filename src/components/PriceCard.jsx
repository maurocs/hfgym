import PropTypes from 'prop-types';

const PriceCard = (props) => {
    return (
        <div className={`font-montserrat w-full max-w-sm p-4 border border-gray-200 rounded-lg shadow sm:p-8  text-hfWhite flex flex-col justify-between
        bg-gradient-to-r from-hfDark to-hfDarkish relative overflow-hidden
        ${props.tier === 'pro' && 'ring-4 ring-orange-500'}
        ${props.tier === 'advanced' && 'ring-4 ring-orange-300'}
        ${props.tier === 'basic' && 'ring-4 ring-orange-100'}
        `}>
            {props.tier === 'pro' &&
                <div className='absolute top-0 right-0 px-4 py-3 bg-orange-500 rounded-bl-lg text-center font-bold shadow-sm'>
                    TOP <br /> PICK
                </div>
            }
            <h5 className="mb-4 text-2xl font-bold grow-0">
                {props.title}
            </h5>
            <div className="flex items-baseline text-gray-900 dark:text-white  grow-0">
                <span className="text-3xl font-semibold">€</span>
                <span className="text-5xl font-extrabold tracking-tight">{props.price}</span>
                <span className="ms-1 text-xl font-normal text-gray-400">
                /mês
                </span>
            </div>
            <ul role="list" className="space-y-5 my-7 grow">
                {props.children}
            </ul>
            <button
                type="button"
                className="text-hfD bg-gradient-to-r from-primary to-orange-500 hover:bg-gradient-to-bl uppercase font-montserrat font-bold
                active:ring-4 active:outline-none active:ring-orange-700 rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            >
                Selecionar plano
            </button>
        </div>
    );
};

PriceCard.propTypes = {
    tier: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.string,
    children: PropTypes.node
};

export default PriceCard;
