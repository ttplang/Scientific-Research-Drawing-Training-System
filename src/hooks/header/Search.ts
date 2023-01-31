import { ref } from "vue";
import { useRouter } from 'vue-router'
import { ElMessage  } from "element-plus";

export default () => {
  const router = useRouter();
  const question = ref('');
  const search = () => {
    if (question.value) {
      const params = question.value;
      question.value = '';
      router.push({
        path: 'search',
        query: {
          keywords: params,
        },
      });
    } else {
      ElMessage.error('请先输入关键字再搜索');
    }
  };
  return {
    question,
    search,
  };
};