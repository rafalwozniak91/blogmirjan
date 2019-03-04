<template>
    <div id="post">
        <Breadcrumb/>
        <div class="content">
            <h1>Tytul posta</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae felis gravida, luctus diam eget, placerat lectus. Cras non ipsum vitae turpis commodo consectetur. Vivamus sed magna eget augue hendrerit dapibus. Vestibulum dapibus, odio sit amet fringilla iaculis, orci magna aliquet magna, ut elementum nisi dolor vel arcu. Curabitur at lectus convallis sem suscipit vehicula sit amet tempus erat. Sed mattis porttitor orci et fermentum. Morbi mollis, ex vel eleifend suscipit, nisi justo viverra turpis, ut scelerisque orci enim quis risus. Vestibulum viverra ornare ipsum nec semper. Donec bibendum magna turpis, nec lobortis eros ultricies in.</p>
            <p>Nunc neque mi, euismod non sagittis in, pharetra vel quam. Etiam in massa sed arcu porta luctus. Nam et pretium velit. Proin pellentesque, nunc ut placerat aliquet, magna arcu consequat nunc, vitae feugiat magna risus sed felis. Nam et aliquet velit, a accumsan ante. Nullam et maximus velit. Pellentesque non ipsum feugiat nulla tempus vehicula non eget mauris.</p>
            <p>Aliquam ac mollis lorem. Maecenas sit amet mattis ipsum, non laoreet libero. Morbi libero justo, euismod ac nunc vel, bibendum sollicitudin magna. Duis eu nisl nec odio convallis convallis aliquet et mi. Sed sit amet dui sapien. Sed eu nulla massa. Duis pulvinar consequat ante, in tempus dui aliquam eu. Sed tincidunt turpis et odio tristique tempus mattis at dolor.</p>
            <p>Sed placerat condimentum mi at semper. Proin lacus justo, viverra eget congue quis, viverra et mi. Aliquam luctus, risus in tristique semper, dui libero porta ex, ut maximus libero purus vel justo. Mauris quis egestas neque. Proin sodales mollis mauris, pretium vestibulum ligula feugiat eu. Cras enim purus, semper et cursus sed, tristique in libero. Vivamus placerat venenatis diam. Integer luctus tincidunt libero. Nam ac fringilla eros, nec aliquam augue.</p>
            <p>Donec vulputate sodales sapien, in imperdiet magna lobortis tempus. Nam magna lorem, sodales sed facilisis vel, aliquam sollicitudin nisi. Donec efficitur gravida laoreet. Cras faucibus sit amet dolor eget dignissim. Phasellus a tincidunt nisl, sit amet sagittis sapien. Aliquam erat volutpat. Fusce venenatis velit accumsan sollicitudin pulvinar. Vestibulum tempor leo neque, sit amet vehicula dolor ornare sed.</p>
        </div>
        <Tags/>
        <CommentList/>
        <NewComment/>
        <PostsCarousel/>     
    </div>
</template>

<script>
// @ is an alias to /src
import Breadcrumb from '@/components/Breadcrumb.vue'
import CommentList from '@/components/modules/comments/CommentList.vue'
import NewComment from '@/components/modules/comments/NewComment.vue'
import PostsCarousel from '@/components/modules/PostsCarousel.vue'
import Tags from '@/components/modules/Tags.vue'

export default {
  name: 'post',
  components: {
    Breadcrumb, CommentList, NewComment, PostsCarousel, Tags
  }
}
</script>
