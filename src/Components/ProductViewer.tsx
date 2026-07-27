import clsx from "clsx";
import useMacbookStore from "../Store"

const ProductViewer = () => {

    const {color,setColor,size,setSize} = useMacbookStore();
    
  return (
    <section id="product-viewer" className="pt-6">
        <h2>Take a closer look</h2>

        <div className="controls">
            <p className="info">MacbookPro {size} in space {color}</p>

            <div className="flex-center gap-5 mt-5">

                <div className="color-control">
                    <div onClick={()=>setColor('#adb5bd')} className={clsx('bg-neutral-300',color === '#adb5bd'  && 'active')}></div>
                    <div onClick={()=>setColor('#2e2c2e')} className={clsx('bg-neutral-900',color === '#2e2c2e'  && 'active')}></div>
                </div>

                <div className="size-control">
                    <div onClick={()=>setSize(0.06)} className={clsx(size === 0.06 ? 'bg-white text-black': 'bg-transparent')}><p>14`</p></div>
                    <div onClick={()=>setSize(0.08)} className={clsx(size === 0.08 ? 'bg-white text-black': 'bg-transparent')}><p>16`</p></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductViewer