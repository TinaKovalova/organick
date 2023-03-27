import './CircleSign.scss';
export function CircleSign({amount,productName}){
    return (
        <div className='circle-sign'>
            <p className='circle-sign__amount'>{amount}</p>
            <p className='circle-sign__product'>{productName}</p>
        </div>
    )
}