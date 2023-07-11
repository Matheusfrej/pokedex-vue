<template>
  <span :class="classes">{{ type }}</span>
</template>

<script>
  export default {
    name: 'PokemonType',
    props: {
      type: String,
    },

    data() {

    },
    computed: {
      classes() {
        return ['type', this.type.toLowerCase()]
      }
    }
  }
</script>

<style scoped>
.type {
  padding: 0.25rem 0.375rem;
  border-radius: 8px;
}

.grass {
  background-color: #9bcc50;
  color: #212121;
}

.poison {
  background-color: #b97fc9;
  color: #fff;
}

.bug {
  background-color: #729f3f;
  color: #fff;
}

.dragon {
  background: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
  background-color: #53a4cf;
  color: #fff;
}

.fairy {
  background-color: #fdb9e9;
  color: #212121;
}

.fire {
  background-color: #fd7d24;
  color: #fff;
}

.ghost {
  background-color: #7b62a3;
  color: #fff;
}

.ground {
  background: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
  background-color: #f7de3f;
  color: #212121;
}

.normal {
  background-color: #a4acaf;
  color: #212121;
}

.psychic {
  background-color: #f366b9;
  color: #fff;
}

.steel {
  background-color: #9eb7b8;
  color: #212121;
}

.dark {
  background-color: #707070;
  color: #fff;
}

.electric {
  background-color: #eed535;
  color: #212121;
}

.fighting {
  background-color: #d56723;
  color: #fff;
}

.flying {
  background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
  background-color: #3dc7ef;
  color: #212121;
}

.ice {
  background-color: #51c4e7;
  color: #212121;
}

.rock {
  background-color: #a38c21;
  color: #fff;
}

.water {
  background-color: #4592c4;
  color: #fff;
}

</style>
