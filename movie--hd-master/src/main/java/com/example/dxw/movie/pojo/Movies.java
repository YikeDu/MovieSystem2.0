package com.example.dxw.movie.pojo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serializable;


@Data
@EqualsAndHashCode(callSuper = false)
public class Movies implements Serializable {

    private static final long serialVersionUID = 1L;
//
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

//    @TableField("index")
//    private String index;

    @TableField("movieId")
    private String movieid;

    private String title;

    private String genres;


}
