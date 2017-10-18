<template>
	<div class="manage tc">
		<button v-on:click="add">新增</button>
		<div class="input-area" v-show="showAdd">
			<input type="text" placeholder="请输入人员姓名" v-model="nameValue">
			<button v-on:click="addName" v-show="showAddBtn">确定</button>
			<button v-on:click="editName" v-show="!showAddBtn">确定</button>
		</div>
		<table>
			<tr>
				<th>姓名</th>
				<th>操作</th>
			</tr>
			<tr v-for="(item,index) in peoples">
				<td>{{item.name}}</td>
				<td v-bind:id="index"><span v-on:click="edit">编辑</span> <span v-on:click="del">删除</span></td>
			</tr>
		</table>
		<footer-nav  v-bind:class="{'isManage':isNowPage}"></footer-nav>
	</div>
</template>
<script>
	import FooterNav from '../../components/footer.vue'
	export default {
	  components: {
	    FooterNav
	  },
	  data () {
	    return {
	      isNowPage: true,
	      showAdd: false,
	      showAddBtn: true,
	      peoples: [{'name': 'jack'}, {'name': '小黑'}],
	      nameId: 0,
	      nameValue: ''
	    }
	  },
	  methods: {
	    add () {
	      this.showAddBtn = true
	      this.showAdd = !this.showAdd
	    },
	    addName () {
	      var v = this.nameValue
	      if (v.trim() === '') {
	        alert('请输入新增人员姓名')
	      } else {
	        var data = {}
	        data.name = v
	        this.peoples.push(data)
	      }
	    },
	    del (e) {
	      var id = e.target.offsetParent.id
	      this.peoples.splice(id, 1)
	    },
	    edit (e) {
	      var id = e.target.offsetParent.id
	      this.showAdd = true
	      this.showAddBtn = false
	      this.nameId = id
	      this.nameValue = this.peoples[id].name
	    },
	    editName () {
	      var v = this.nameValue
	      if (v.trim() === '') {
	        alert('请输入新增人员姓名')
	      } else {
	        this.peoples[this.nameId].name = v
	      }
	    }
	  }
	}
</script>