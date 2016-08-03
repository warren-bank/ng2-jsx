export class data {
  public static val: string = 'John Smith';

  public static get_name_1(): string{
    return data.val;
  }

  public static get_name_2(): string{
    return 'Jane Doe';
  }

  public static get_name_3(n: string): string{
    return n;
  }
}
