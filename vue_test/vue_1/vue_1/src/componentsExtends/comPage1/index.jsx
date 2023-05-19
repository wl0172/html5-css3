import { defineComponent } from "vue";
import HelloWorld from '../../components/HelloWorld.vue';


const ComPage1 = defineComponent({
  extends: HelloWorld,
  setup(props, context) {
    // console.log(props, context,'props, context,======')
    // const { slots: { icon, title, buttons } } = context;

    const aa = () => {
      console.log('jsx---')
    }

    return () => (
      <div>
        123
        {/* handleHelloWorldClick={()=>{console.log('jsx---')}}  */}
        <HelloWorld msg="111!" handleHelloWorldClick={null}  />
      </div>
    );
  },
});

export default ComPage1