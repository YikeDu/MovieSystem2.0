package com.example.dxw.movie.pojo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serializable;


@Data
@EqualsAndHashCode(callSuper = false)
@TableName("p_movie")
@ApiModel(value="PMovieDO对象", description="")
public class PMovieDO implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "id")
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    private String movieid;

    private String year;

    private String runtime;


    private String imageSrc1;


    private String imageSrc2;

    private String jj;

    private String language;

    private String title;

    private String name;


    private String mtypeLis;


    private String voteCount;

    private String tj;

    private String xs;

    private String hearf;

    private String routing;
    private String fz;
    private String timestamp;
    @TableField(exist = false)
    private Object comment;


}
