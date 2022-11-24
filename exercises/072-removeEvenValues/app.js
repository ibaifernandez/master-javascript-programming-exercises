function removeEvenValues(obj) {
        for (let property in obj) {
          if (obj[property] % 2 === 0) {
            delete obj[property];
          }
      }
      return obj;
      }