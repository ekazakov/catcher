export default function myTransform(options) {
    return function wrap(ReactClass, uniqueId) {
        const originalRender = ReactClass.prototype.render;
        const name = options.components[uniqueId].displayName || '<Unknown>';


        ReactClass.prototype.render = function() {
            //console.log('uniqueId:', uniqueId);
            //console.dir(options);
            console.log(`${name}:`, this.props, this.state);
            try {

                return originalRender.apply(this, arguments);
            } catch(err) {
                console.error(err);
                return null;
            }
        };

        return ReactClass;
    }
}