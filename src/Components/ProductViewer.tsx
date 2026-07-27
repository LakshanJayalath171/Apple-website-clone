const ProductViewer = () => {
  return (
    <section id="product-viewer" className="pt-6">
        <h2>Take a closer look</h2>

        <div className="controls">
            <p className="info">MacbookPro 16` in space black</p>

            <div className="flex-center gap-5 mt-5">

                <div className="color-control">
                    <div className="bg-neutral-300"></div>
                    <div className="bg-neutral-900"></div>
                </div>

                <div className="size-control">
                    <div><p>14`</p></div>
                    <div><p>16`</p></div>
                </div>
            </div>
        </div>

        <div>Product canvas</div>
    </section>
  )
}

export default ProductViewer