import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: "type",
  pure: false
})

export class TypePipe implements PipeTransform {

  transform(input: Project[], desiredType) {
    var output: Project[] = [];
    if(desiredType === "business") {
      for(var i = 0; i < input.length; i++) {
        if(input[i].type.toLowerCase() === "business") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredType === "personal") {
      for(var i = 0; i < input.length; i++) {
        if(input[i].type.toLowerCase() === "personal") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
