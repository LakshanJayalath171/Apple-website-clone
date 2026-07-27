const Showcase = () => {
  return (
    <section id="showcase">
      <div className="media">
            <video src="/videos/game.mp4" loop muted autoPlay/>

            <div>
                <img src="/mask-logo.svg"/>
            </div>
        </div>

      <div className="">
        <div className="wrapper">
          <div className="lg:max-w-md">
            <h2>Rocket Chip</h2>
            <div className="space-y-5 mt-7 pe-10">
              <p>
                Introducing
                <span className="text-blue-50">
                  M4 , The next generation apple silicon
                </span>
                .M4 powered
              </p>

              <p>
                It drives Apple Intelligence on iPad Pro, so you can write,
                create, and accomplish more with ease. All in a design that’s
                unbelievably thin, light, and powerful.
              </p>
              <p>
                A brand-new display engine delivers breathtaking precision,
                color accuracy, and brightness. And a next-gen GPU with
                hardware-accelerated ray tracing brings console-level graphics
                to your fingertips.
              </p>
              <p className="text-primary">
                <a href="">Learn more about Apple Intelligence</a>
              </p>
            </div>

            <div className="max-w-3xs space-y-14">
              <div className="space-y-2">
                <p>Up to</p>
                <h3>4x faster</h3>
                <p>Pro rendering perfomance than M2</p>
              </div>
              <div className="space-y-2">
                <p>Up to</p>
                <h3>1.5x faster</h3>
                <p>CPU perfomance than M2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
