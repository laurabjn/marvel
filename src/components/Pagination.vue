<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
    name: "Pagination",
    props: [
        'items',
        'currentPage',
        'pageSize'
    ],
    methods: {
        updatePage(pageNumber: number) {
            this.$emit('page-update-event', pageNumber);
        },
        totalPages(): number {
            return Math.ceil(this.items.length / this.pageSize);
        },
        showPreviousLink(): Boolean {
            return this.currentPage == 0 ? false : true;
        },
        showNextLink(): Boolean {
            return this.currentPage == (this.totalPages() - 1) ? false : true;
        }
    }
})
</script>
<template>
    <div v-if="totalPages() > 0" class="pagination-wrapper">
        <span v-if="showPreviousLink()" class="pagination-btn" @click="updatePage(currentPage - 1)"> prev </span>
        {{ currentPage + 1 }} of {{ totalPages() }}
        <span v-if="showNextLink()" class="pagination-btn" @click="updatePage(currentPage + 1)"> next </span>
    </div>
</template>
<style scoped>
.pagination-btn {
  cursor: pointer;
}
</style>