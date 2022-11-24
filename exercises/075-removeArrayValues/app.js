function removeArrayValues(obj) {
        for (let property in obj) {
          if (Array.isArray(obj[property])) {
            delete obj[property];
          }
      }
      return obj;
      }
      
